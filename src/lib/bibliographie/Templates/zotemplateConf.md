---
cssclass: research-note
type: "{{itemType}}"{% for type, creators in creators | groupby("creatorType") -%}
{% if loop.first %}

{% endif %}
{{type | replace("interviewee", "author") | replace("director", "author") | replace("presenter", "author") | replace("podcaster", "author") | replace("programmer", "author") | replace("cartographer", "author") | replace("inventor", "author") | replace("sponsor", "author") | replace("performer", "author") | replace("artist", "author")}}: "{%- for creator in creators -%}
{%- if creator.name %}{{creator.name}}{%- else %}{{creator.lastName}}, {{creator.firstName}}{%- endif %}{% if not loop.last %}; {% endif %}{% endfor %}"{% if not loop.last %}
{% endif %}{%- endfor %}
{% if title %}
title: "{{title}}"{% endif %}
{% if publicationTitle %}
publication: "{{publicationTitle}}"{% endif %}
{% if publicationTitle %}
event: "{{eventtitle}}"{% endif %}
{% if event %}
lieu: "{{venue}}"{% endif %}
{% if venue %}
date: {{date | format("YYYY")}}{% endif %}
{% if archive %}
archive: "{{archive}}"{% endif %}
{% if archiveLocation %}
archive-location: "{{archiveLocation}}"{% endif %}
citekey: {{citekey}}
abstract: {{abstractNote}}
tags: {% if tags.length > 0 -%}
{%- for t in tags -%}
#{% if t.tag == "secondary" %}source/secondary
{% elif t.tag == "primary" %}source/primary
{% elif "-project" in t.tag %}project/{{t.tag | lower | replace(" ", "-") | replace("-project", "")}}
{% else %}subject/{{t.tag | lower | replace(" ", "-")}}
{% endif %}{% endfor %}
{% endif %}
theme:
citation:{{bibliography}}
---
### Présentation intervenant.e.s

### Notes

### Lien avec la thèse

### Idées principales
### Links  (private)

[online]({{uri}}) [local]({{desktopURI}})
{%- for attachment in attachments | filterby("path", "endswith", ".pdf") %}
[pdf](file://{{attachment.path | replace(" ", "%20")}})
{% if loop.last %}{% endif %}
{%- endfor %}
