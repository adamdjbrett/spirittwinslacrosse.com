---
layout: page
title: 'Clinics'
permalink: /clinics/
image: "images/wooden-lacrosse-stick-love-laxcon-min.jpg"
sitemap: true
---
## Spirit Twins Lacrosse Clinics  
:lacrosse:

<ul id="recent-articles">
    {% for post in site.categories["clinics"] limit:10 %}
        <li>
        {{ post.date | date: "%d %b %Y" }}:
        <h3><a class="post-link" href="{{ post.url | relative_url }}" title="{{ post.description }}">{{ post.title | escape }}</a></h3>
        </li>
    {% endfor %}
</ul>
