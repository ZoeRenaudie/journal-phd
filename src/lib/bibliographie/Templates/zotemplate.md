---
cssclass: research-note
type: "{{itemType}}"
{% set authorList = [] %}
{% for type, creators in creators | groupby("creatorType") %}
{% set ntype = type | replace("interviewee", "author") | replace("director", "author") | replace("presenter", "author") | replace("podcaster", "author") | replace("programmer", "author") | replace("cartographer", "author") | replace("inventor", "author") | replace("sponsor", "author") | replace("performer", "author") | replace("artist", "author") %}
{{ntype}}: "{%- for creator in creators -%}{%- if creator.name %}{{creator.name}}{%- else %}{{creator.lastName}}, {{creator.firstName}}{%- endif %}{% if not loop.last %}; {% endif %}{%- endfor %}"
{% endfor %}
{% if title %}title: "{{title | replace('"', '\\"')}}"{% endif %}
{% if publicationTitle %}publication: "{{publicationTitle}}"{% endif %}
{% if date %}date: {{date | format("YYYY")}}{% endif %}
{% if place %}place: "{{place}}"{% endif %}
{% if publisher %}publisher: "{{publisher}}"{% endif %}
{% if archive %}archive: "{{archive}}"{% endif %}
{% if archiveLocation %}archive-location: "{{archiveLocation}}"{% endif %}
citekey: "{{citekey}}"
{% if abstractNote %}abstract: "{{abstractNote | replace('"', '\\"') | replace('\n', ' ')}}"{% endif %}
tags:
{% if tags.length > 0 %}{% for t in tags %}
  - {% if t.tag == "secondary" %}source/secondary{% elif t.tag == "primary" %}source/primary{% elif "-project" in t.tag %}project/{{t.tag | lower | replace(" ", "-") | replace("-project", "")}}{% else %}subject/{{t.tag | lower | replace(" ", "-")}}{% endif %}
{% endfor %}{% endif %}
theme:
bibliography: "{{bibliography | replace('"', '\\"')}}"
---

## Présentation auteur·e·s

{% for creator in creators %}{% if creator.creatorType == "author" %}[[{{creator.lastName}}, {{creator.firstName}}]]
{% endif %}{% endfor %}

## Résumé

## Lien avec la thèse

## Idées principales

{% macro annotationColor(color) -%}
{%- if color == "general.yellow" or color == "#ffd400" -%}yellow
{%- elif color == "general.orange" or color == "#f19837" -%}orange
{%- elif color == "general.green" or color == "#5fb236" -%}green
{%- elif color == "general.red" or color == "#ff6666" -%}red
{%- elif color == "general.blue" or color == "#2ea8e5" or color == "#2e9ed6" -%}blue
{%- elif color == "general.purple" or color == "#a28ae5" -%}purple
{%- else -%}default
{%- endif -%}
{%- endmacro -%}

{% macro annotationLabel(color) -%}
{%- if color == "orange" -%}Supporting Argument or Example
{%- elif color == "green" -%}Very Important or Critical
{%- elif color == "red" -%}Disagree with Author
{%- elif color == "blue" -%}Interesting References
{%- elif color == "purple" -%}Vocabulary, Names, Dates, Definition
{%- elif color == "yellow" -%}Citation
{%- else -%}Note
{%- endif -%}
{%- endmacro -%}

{% persist "annotations" %}
{% set annotations = annotations | filterby("date", "dateafter", lastImportDate) -%}
{% if annotations.length > 0 %}

## Citations importées le {{importDate | format("YYYY-MM-DD")}}

{%- for annotation in annotations %}
{%- set colorKey = annotationColor(annotation.color) %}
{%- if colorKey == "yellow" %}

{{annotation.annotatedText}}{% if annotation.pageLabel %}(p. {{annotation.pageLabel | replace("p. ", "") | replace("p.", "") | trim}}){% endif %}
{% if annotation.comment %}> {{annotation.comment}}{% endif %}

{%- else %}

> [!quote|{{colorKey}}] {{annotationLabel(colorKey)}}
> {{annotation.annotatedText}}{% if annotation.pageLabel %}(p. {{annotation.pageLabel | replace("p. ", "") | replace("p.", "") | trim}}){% endif %}
{% if annotation.comment %}
> **Note :** {{annotation.comment}}{% endif %}

{%- endif %}
{%- endfor %}
{% endif %}
{% endpersist %}

## Bibliographie

## Liens

{% for attachment in attachments | filterby("path", "endswith", ".pdf") %}[PDF local](file://{{attachment.path | replace(" ", "%20")}}){% endfor %}