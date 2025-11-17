# Episode Audio Files

Place episode audio files here. Each episode should have a corresponding MP3 file:

- `episode-001.mp3` through `episode-020.mp3`
- Recommended settings: 64-96 kbps, mono, MP3 format
- Target: ≤3MB per file to keep repository size reasonable

## Mock Audio Generation

For development/testing, you can:
1. Use text-to-speech tools to generate mock narration
2. Record short placeholder audio (just announce the episode number)
3. Use silent audio files of appropriate duration
4. Use royalty-free audio from free sources (with attribution if required)

Example ffmpeg command to create a 30-second silent MP3:
```bash
ffmpeg -f lavfi -i anullsrc=r=44100:cl=mono -t 30 -q:a 9 -acodec libmp3lame episode-001.mp3
```

**Note**: For production, replace with actual podcast audio.

