# Presentation System

Presentation system is responsible for presenting skin sprites, effect clips, and particle effects.

## Skin Sprites

All skin sprites from `Draw` and `DrawCurved*` function calls are drawn.

## Effect Clips

All effect clips from `Play`, `PlayLooped`, `StopLooped`, `PlayScheduled`, `PlayLoopedScheduled`, and `StopLoopedScheduled` function calls are played and stopped.

## Particle Effects

All particle effects from `SpawnParticleEffect`, `MoveParticleEffect`, and `DestroyParticleEffect` function calls are spawned, moved, and destroyed.

## Remarks

All function calls are processed regardless whether the source entity is still active or not.
