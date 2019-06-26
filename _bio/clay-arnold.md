---
layout: page
title: "Clay Arnold"
description: "Defense/Transition Coach"
image: "images/clay-arnold.jpg"
permalink: /bio/clay-arnold/
---

<button class="btn align-right print-content-button">Print</button>

<div class="print-content">

{% capture pageContent %}
{% assign cv = site.data.clay-cv %}
# {{ clay-cv.details.name }}
{% if clay-cv.details.blurb %}
### {{ clay-cv.details.blurb }}
{% endif %}

{% if clay-cv.details.email %}Email: **<a href="mailto:{{ clay-cv.details.email }}">{{ clay-cv.details.email }}</a>**<br />{% endif %}
{% if clay-cv.details.phone %}Phone: **{{ clay-cv.details.phone }}**<br />{% endif %}
{% if clay-cv.details.location %}Location: **{{ clay-cv.details.location }}**<br />{% endif %}

{% for section in clay-cv.sections %}
## {{ section.title }}
{% if section.request %}
### {{section.title}} available on request
{% else %}
{% for item in section.content %}
{% if item.title %}
### {{ item.title }}
{% endif %}
{% if item.date and item.blurb %}
#### ({{ item.date }}) {{ item.blurb }}
{% elsif item.date %}
#### {{ item.date }}
{% elsif item.blurb %}
#### {{ item.blurb }}
{% endif %}
{% for content in item.content %}
{{ content }}
{% endfor %}
{% endfor %}
{% endif %}
{% unless forloop.last %}
---
{% endunless %}
{% endfor %}
{% endcapture %}

{{ pageContent | markdownify }}

</div>
