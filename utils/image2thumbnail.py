# Copyright (c) 2025 takotime808
#########################################################################
############################# Set Variables #############################
#########################################################################
# These variables can be modified
#   here or when functions are called

# path images stored in
_path_to_original_images = './'

# path you want thumbnails saved to
_path_for_thumnails = './thumbnails/'

# name of final photo map file
_mapname='Beth_Jeff_Adventures_thumbnails.html'

# thumbnail dimensions and size of boarder arund image (on photomap)
_imgsize = 500
#########################################################################



def makeThumbnails(path_to_original_images, path_for_thumnails, _imgsize_):
    ''' Function to make thumbnails out of all images we want to add to the final page '''
    from PIL import Image
    import os

    # make directory for thumbnails, if it doesnt exist
    if not os.path.exists(path_for_thumnails):
        os.makedirs(path_for_thumnails)

    for photos in os.listdir(path_to_original_images):
        # only run loop over files that have correct extensions
        if photos.endswith(".jpg") or photos.endswith(".JPG") or photos.endswith(".png") or photos.endswith(".PNG"):
            os.path.isfile('./path_of_file')
            # open and resize image        
            img = Image.open(photos)
            img.thumbnail([_imgsize_, _imgsize_],Image.ANTIALIAS)
            
            # save ouput file
            outFilename = path_for_thumnails + photos
            img.save(outFilename)

            print('made thumbnail for: ', outFilename)


#def makePhotoMap(mapname='./Beth_Jeff_Adventures_thumbnails.html'):
def makePhotoMap(mapname, _imgsize_):
    import pandas as pd
    import folium
    # do for all images in file, not just one image
    df = pd.read_csv('photolist.csv')

    # make list out of photos
    imgpaths=df[df.columns[0]].to_list()

    # batch coordinates for each image
    #imgcoords=[[df['lat'][i], df['long'][i]] for i in range(len(df))]
    imgcoords=[[df[df.columns[1]][i], df[df.columns[2]][i]] for i in range(len(df))]

    # make list of image descriptions
    describeimgs=df[df.columns[3]].to_list()

    m = folium.Map(imgcoords[0], zoom_start=10)

    testNOloop = [folium.Html('<img src='+imgpaths[i]+'>', script=True) for i in range(len(imgpaths))]

    #popup1NOloop = [folium.Popup(testNOloop[i], max_width=2650) for i in range(len(testNOloop))]

    [folium.Marker(imgcoords[i]).add_to(m) for i in range(len(imgcoords))]

    # add popup
    popup1 = [folium.Popup(testNOloop[i], max_width=_imgsize_) for i in range(len(testNOloop))]

    [folium.RegularPolygonMarker(location=imgcoords[j], popup=popup1[j],).add_to(m) for j in range(len(imgcoords))]

    m.save(mapname)


# call function to make thumbnails
makeThumbnails(_path_to_original_images, _path_for_thumnails, _imgsize)
# call function to make photo map
makePhotoMap(_mapname, _imgsize)