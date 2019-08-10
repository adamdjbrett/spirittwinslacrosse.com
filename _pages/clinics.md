---
layout: page
title: 'Clinics'
sitemap: true
permalink: /clinics/
image: "images/wooden-lacrosse-stick-love-laxcon-min.jpg"
---
<ul id="recent-articles">
    {% for post in site.categories["my-category"] limit:10 %}
        <li>
        {{ post.date | date: "%d %b %Y" }}:
        <a class="post-link" href="{{ post.url | relative_url }}" title="{{ post.description }}">{{ post.title | escape }}</a>
        </li>
    {% endfor %}
</ul>
