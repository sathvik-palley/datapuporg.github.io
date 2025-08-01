<script>
  import { onMount } from 'svelte';
  
  let videoElement;
  let isPlaying = true;
  let isLoaded = false;
  
  onMount(() => {
    if (videoElement) {
      videoElement.addEventListener('loadeddata', () => {
        isLoaded = true;
      });
      videoElement.addEventListener('canplay', () => {
        isLoaded = true;
      });
      videoElement.addEventListener('loadstart', () => {
        isLoaded = false;
      });
      // Set loaded to true once video starts playing
      videoElement.addEventListener('playing', () => {
        isLoaded = true;
      });
    }
  });

  function toggleVideo() {
    if (videoElement) {
      if (isPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
    }
  }

  function handlePlay() {
    isPlaying = true;
  }

  function handlePause() {
    isPlaying = false;
  }
</script>

<style>
  .video-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 90%;
    margin: 2rem auto 2rem 2rem;
  }

  .video-wrapper {
    position: relative;
    width: 900px;
    max-width: 100%;
  }

  .demo-video {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    background: #000;
  }

  .video-control {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0,0,0,0.7);
    border: none;
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .video-wrapper:hover .video-control {
    opacity: 1;
  }

  .control-icon {
    color: white;
    font-size: 1.5rem;
  }

  .loading-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 2rem;
  }

  /* Tablet styles */
  @media (max-width: 1200px) {
    .video-container {
      margin: 2rem auto;
      max-width: 95%;
    }

    .video-wrapper {
      width: 700px;
    }
  }

  /* Mobile styles */
  @media (max-width: 768px) {
    .video-container {
      max-width: 95%;
      margin: 1rem auto;
    }
    
    .video-wrapper {
      width: 100%;
    }

    .video-control {
      width: 3.5rem;
      height: 3.5rem;
    }

    .control-icon {
      font-size: 1.3rem;
    }
  }

  /* Small mobile styles */
  @media (max-width: 480px) {
    .video-container {
      margin: 0.5rem auto;
    }

    .video-control {
      width: 3rem;
      height: 3rem;
    }

    .control-icon {
      font-size: 1.2rem;
    }
  }
</style>

<div class="video-container">
  <div class="video-wrapper">
    
    <video 
      bind:this={videoElement}
      class="demo-video"
      src="/videos/datapup-demo.mov"
      preload="metadata"
      autoplay
      loop
      muted
      on:play={handlePlay}
      on:pause={handlePause}
      poster=""
    >
      <p>Your browser doesn't support HTML video. <a href="/videos/datapup-demo.mov">Download the video</a> instead.</p>
    </video>
    
    <button 
      class="video-control"
      on:click={toggleVideo}
      aria-label={isPlaying ? 'Pause video' : 'Play video'}
    >
      <span class="control-icon">
        {#if isPlaying}
          ⏸️
        {:else}
          ▶️
        {/if}
      </span>
    </button>
  </div>
</div>