# Resources

A resource is a file which Sonolus app can understand and use to dynamically change its appearance and behavior.

## Image Resources

Image resources are used for types such as `LevelCover`.

`.png` is the recommended format for image recourses.

## Audio Resources

Audio resources are used for types such as `LevelBgm`.

`.mp3` is the recommended format for audio resources.

## JSON Resources

JSON resources are used for types such as `LevelData`.

`.json` is the only supported format, and must also be GZip compressed.

## Archive Resources

Archive resources are used for types such as `EffectAudio`.

`.zip` is the only supported format.

## Binary Resources

Binary resources are used for types such as `EngineRom`.

Content is binary data with schema defined by the respective type, and must also be GZip compressed.
