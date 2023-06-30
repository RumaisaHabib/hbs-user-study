# Convert timestamps into suitable format
# <url><space><opera timestamp><space><brave timestamp>

import sys
from datetime import datetime

input_file = sys.argv[1]
output_file = sys.argv[2]

# Input format is url, brave timestamp first
new_file_text = ""

with open(input_file) as f:
    while True:
        brave = f.readline()
        opera = f.readline()
        # escape if file ends
        if not brave or not opera: break
        
        # get timestamps
        url, brave_time = brave.strip().split(",")
        _, opera_time = opera.strip().split(",")
        
        # convert time format
        brave_iso = datetime.fromtimestamp(float(brave_time)).isoformat()
        opera_iso = datetime.fromtimestamp(float(opera_time)).isoformat()

        # form new line
        new_file_text+=f"{url} {opera_iso} {brave_iso}\n"
        
open(output_file,"w").write(new_file_text)
        