import numpy as np
import moviepy as mp
import moviepy.editor as mpe
import os

path = "src/images/Video/sample\ footage.mp4"
# path = 'src/images/Video/sample\ footage.mp4'
path = 'src/images/Video/sample footage.mp4' 
path = 'src/videos/sample footage.mp4' 
path = os.path.expanduser("~/Videos/urban-farms/sample footage.mp4")

# Load myHolidays.mp4 and select the subclip 00:00:50 - 00:00:60

# Load select the subclip 00:00:50 - 00:00:60
start = 60*3 + 3
end = start + 24
clip = mpe.VideoFileClip(path).subclip(start,end)

clip.write_videofile("src/videos/vid.mp4")
# with open(path, "r") as f:
#     print("hmm")

