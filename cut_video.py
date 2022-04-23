import numpy as np
import moviepy as mp
import moviepy.editor as mpe
import moviepy.video.fx.all as vfx
import os

# moviepy:
# https://zulko.github.io/moviepy/ref/videofx.html

# original:
pathOriginal = os.path.expanduser("~/Videos/urban-farms/sample footage.mp4")


# Load a supclip from the video
start = 60*3 + 2.85
end = start + 7.0
clip = mpe.VideoFileClip(pathOriginal).subclip(start,end)
# shape = (1920, 1080)
dimx, dimy = clip.size




# cropx = 0
# cropy = 120
# clip = vfx.crop(clip, 
#                 x1=cropx, 
#                 y1=cropy, 
#                 x2=dimx - cropx, 
#                 y2=dimy - cropy)


# clip = vfx.blackwhite(clip)



# clip = vfx.resize(clip, newsize=0.75)

# wtf = np.pi / 2


# Add fading:
clip = clip.fadein(duration=1, initial_color=[0,0,0])
clip = clip.fadeout(duration=1, final_color=[0,0,0])


clip.write_videofile("src/media/videos/vid.mp4")

