import numpy as np
import moviepy as mp
import moviepy.editor as mpe
import os

# original:
pathOriginal = os.path.expanduser("~/Videos/urban-farms/sample footage.mp4")


# Load a supclip from the video
start = 60*3 + 2.85
end = start + 7.0
clip = mpe.VideoFileClip(pathOriginal).subclip(start,end)

# clip.fadeout(2,final_color="black")

# mp.video.fx.all.fadeout(clip, duration=2, final_color=[0,0,0])
# clip.fadeout(duration=2, final_color=[0,0,0])
clip = clip.fadein(duration=1, initial_color=[0,0,0])
clip = clip.fadeout(duration=1, final_color=[0,0,0])
# clip.fadein(duration=2, 0)

clip.write_videofile("src/media/videos/vid.mp4")

