---
layout: page
title: 'bios'
sitemap: true
share: false
permalink: /bios/
---
<h2>The Founders of Spirit Twins Lacrosse&trade;</h2>
<ul>
  {% for bios in site.bios %}
    <li><h3>
      <a href="{{ bios.url }}">{{ bios.title }}</a>
      - {{ bios.headline }}</h3>
    </li>
  {% endfor %}
</ul>
