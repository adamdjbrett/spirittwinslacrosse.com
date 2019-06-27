---
layout: page
title: 'bios'
sitemap: true
permalink: /bios/
---

<ul>
  {% for bios in site.bios %}
    <li>
      <a href="{{ bios.url }}">{{ bios.title }}</a>
      - {{ bios.headline }}
    </li>
  {% endfor %}
</ul>
