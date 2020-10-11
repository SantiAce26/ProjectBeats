import os
from os  import listdir
from os.path import isfile,join
#mypath = "C:\Users\santi\Documents\musicGenerator\musicOutput"
onlyfiles = os.listdir('.')
with open('file_text','w') as f:
	for item in onlyfiles:
		f.write("%s\n" % item)