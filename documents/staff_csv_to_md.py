from datetime import date, datetime, timedelta
import csv
import itertools
from slugify import slugify
import re

with open('brentano-staff.csv') as csvfile:
  reader = csv.DictReader(csvfile)
  for e in reader:

    md = """---
layout: staff
date: 2015-10-15
image: 
""" 
    
    md = md + "category: " + e['category'] + "\n"
    md = md + "name: " + e['name'] + "\n"
    md = md + "room: " + e['room'] + "\n"
    md = md + "title: " + e['title'] + "\n"
    
    email = re.search(r"\<(.+)\>", e['email'])
    md = md + "email: " + email.group(1) + "\n"

    md = md + "---"

    md_title = "2015-10-15-" + slugify(e['title'] + e['name']) + ".md"
    print("writing to " + md_title)
    
    with open("../_posts/staff/" + md_title, 'w') as f:
      f.write(md)