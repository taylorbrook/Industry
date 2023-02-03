# Industry
Performance Software for Industry and the Arts

https://www.taylorbrook.info/industry

A repository to maintain the latest version of the MAX performance patch and necessary files to run it.
Industry and the Arts is a musical work for Alto Voice, MUGIC, and Electronics (processing and dynamic sampling)

Developed in Max 8.3 by Taylor Brook

This patch must be run at 48K and with as small of packet size that the CPU allows without losing stability (check audio status for these settings and CPU status).

Dependency: 
Fluid Corpus Manipulation (Flucoma): https://www.flucoma.org/ (v1.04)
Soundfiles downloadable here: 
https://www.dropbox.com/s/n6hq5vtl3wxex85/Industry_Audio.zip?dl=1

Summary:
Industry and the Arts is a concert piece for voice and electronics that relies on MAX and a MUGIC device to be performed. Each movement is a set "state" that is controlled dynamically by both the audio input and the MUGIC device.
I suggest a stereo speaker array placed directly beside or behind the performer, as feedback allows. The perception of the sound source should be localized as much as possible on the performer.

Soundfiles and Customization:
The packed-in soundfiles are recordings of Heather Byford and soundscape recordings collected by Taylor Brook in VIctoria, Canada. If you perform this piece, I suggest greating your own samples using your own voice and ideally soundscape recordings from your region. Please contact me if you wish to do this (taylor.brook@gmail.com). Please notes that simply replacing the soundfiles with your own will not work as datasets and onset timings must also be created.


Patch Operation:

1. Launch #1_PerformancePatch_IndustryAndTheArts.maxpat
 2. turn on and connect MUGIC device
  3. Launch #2_MugicConnect.maxpat
   4. Check that you MUGIC device is propoerly connected (Mugic Monitor LED)
    5. set microphone input (uf not channel 1)
     6. hit "INIT" button to turn on audio and set amplification and output levet
      7. toggle on movements as needed




