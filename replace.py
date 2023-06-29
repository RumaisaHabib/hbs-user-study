import re
import os

folders = []
path_ = os.getcwd()
dir_list = os.listdir(path_)
for i in dir_list:
    path = f"{path_}/{i}"
    if not os.path.isfile(path) and os.path.exists(f"{path}/info"):
      if "reduced.html" in os.listdir(f"{path}/info"):
        folders.append(i)

regex = r"(https?://localhost[^\"'\\& ]*)"

for folder in folders:
  with open(f"{folder}/info/reduced.html", "r") as f:
    html_content = f.read()
  
  srcs = re.findall(regex, html_content, re.DOTALL)
    
  for src in srcs:
       if "localhost" in src:
          name = "/".join(src.split("/")[4:])
          url = f"https://github.com/RumaisaHabib/hbs-user-study/raw/main/{folder}/{name}"
          html_content = html_content.replace(src, url)
           
  with open(f"{folder}/info/reduced_new.html", "w+") as f:
    f.write(html_content)
