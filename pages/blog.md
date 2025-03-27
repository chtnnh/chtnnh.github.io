---
layout: Post
title: Blog
permalink: /blog/
content-type: static
---

# Blog

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | relative_url }}">
        {{ post.title }} - {{ post.date | date: "%B %d, %Y" }}
      </a>
      {% if post.description %}
        <p>{{ post.description }}</p>
      {% endif %}
    </li>
  {% endfor %}
</ul> 