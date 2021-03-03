<script lang="ts">
  import { beforeUrlChange, isActive, route, url } from '@sveltech/routify';

  let innerHeight;
  let navOpen = false;
  let toggleLabel;
  $:  if ($isActive('/users')) {
        toggleLabel = 'User';
      } else if ($isActive('/developers')) {
        toggleLabel = 'Developer';
      } else if ($isActive('/businesses')) {
        toggleLabel = 'Business';
      } else if ($isActive('/documentation')) {
        toggleLabel = 'Documentation';
      } else {
        toggleLabel = 'Navigation';
      }

  function handleNavToggle() {
    document.body.classList.toggle('noscroll-navigation');
  }

  $beforeUrlChange(() => {
    navOpen = false;
    document.body.classList.remove('noscroll-navigation');
    return true;
  });
</script>

<style>
  .wrapper {
    align-items: center;
    display: flex;
  }

  .wrapper > :global(ion-icon) {
    color: var(--silver-darken-20);
    height: var(--space-05);
    margin: 0 var(--space-04) 0 auto;
    width: var(--space-05);
  }

  :global(.noscroll-navigation .navigation.wrapper > ion-icon) {
    transform: rotate(180deg);
  }

  input[type="checkbox"] {
    position: absolute;
      top: -9999px;
      left: -9999px;
  }

  input[type="checkbox"]:checked ~ .navigation.main {
    display: block;
    opacity: 1;
    transform: translateY(0%);
  }

  .navigation.main {
    background: #fff;
    border-top: 1px solid var(--header-border-color);
    display: none;
    height: calc(var(--overlay-height, 100vh) - var(--header-height));
    left: 0;
    opacity: 0.6;
    overflow-y: scroll;
    padding: var(--space-09) var(--space-09) var(--space-10);
    position: fixed;
    transform: translateY(10%);
    transition: transform 0.2s ease, opacity 0.2s ease;
    top: var(--header-height);
    width: 100%;
    z-index: 100;
  }

  .navigation.main a {
    border-bottom: 1px solid var(--header-border-color);
    display: block;
    padding: var(--space-05) 0;
  }

  .navigation.main a:hover {
    text-decoration: underline;
  }

  .group {
    padding-left: var(--space-09);
  }

  .group-label {
    align-items: center;
    color: var(--grey-base);
    display: flex;
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: 0.01em;
    line-height: 1.5rem;
    margin-bottom: var(--space-04);
    padding-top: var(--space-09);
    text-transform: uppercase;
  }

  .group-label > :global(ion-icon) {
    height: var(--space-05);
    margin-right: var(--space-04);
    width: var(--space-05);
  }

  .navigation.main a {
    color: var(--text-color);
    text-decoration: none;
  }

  .navigation.main ul {
    list-style-type: none;
  }

  @media only screen and (min-width: 30em) {}

  @media only screen and (min-width: 48em) {
    .active {
      color: #202020;
      font-weight: 700;
    }

    .nav-toggle {
      display: none;
    }

    .navigation.main {
      background: transparent;
      border-top: 0;
      display: flex;
      height: auto;
      padding: 0 var(--space-09);
      opacity: 1;
      overflow: visible;
      padding: 0;
      position: static;
    }

    .navigation.main a {
      border-bottom: 0;
      margin: 0 var(--space-07) 0 0;
      padding: 0;
    }

    .navigation.main > li:last-of-type a {
      margin-right: 0;
    }

    .navigation.dropdown-toggle {
      position: relative; 
    }

    .navigation.dropdown-toggle .arrow.top {
      border: 1px solid #fff;
      display: none;
      width: 100%;
    }

    .navigation.dropdown-toggle:hover .arrow.top {
      display: block;
    }

    .navigation.dropdown-toggle .arrow.top {
      position: absolute;
      bottom: calc(-1 * var(--space-04) - 3px);
      z-index: 10001;
    }
    
    .navigation.dropdown-toggle .arrow.top::after,
    .navigation.dropdown-toggle .arrow.top::before {
      bottom: 100%;
      left: 50%;
      border: solid transparent;
      content: "";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
    }

    .navigation.dropdown-toggle .arrow.top::after {
      border-color: rgba(136, 183, 213, 0);
      border-bottom-color: #fff;
      border-width: var(--space-04);
      margin-left: calc(-1 * var(--space-04));
    }
    .navigation.dropdown-toggle .arrow.top::before {
      border-color: rgba(194, 225, 245, 0);
      border-bottom-color: var(--header-border-color);
      border-width: calc(var(--space-04) + 1px);
      margin-left: calc(-1 * var(--space-04) - 1px);
    }

    .navigation.dropdown-toggle .navigation.dropdown {
      display: none;
      position: fixed;
      left: calc(-1 * var(--space-09));
      width: calc(100% + 2 * var(--space-09));
      z-index: 10000;
    }

    .navigation.dropdown-toggle:hover .navigation.dropdown {
      display: block;
    }

    .navigation.dropdown {
      padding-top: var(--space-04);
    }

    .navigation.dropdown > ul {
      background-color: #fff;
      border: 1px solid var(--header-border-color);
      border-radius: 5px;
      box-shadow: 0px 10px 20px rgba(217, 217, 217, 0.8),
                  0px -10px 20px rgba(255, 255, 255, 0.6);
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: var(--space-09);
    }

    .group {
      padding-left: 0;
    }

    .group-label {
      padding-top: 0;
    }
  }
</style>

<svelte:window bind:innerHeight={innerHeight}/>

<div class="navigation wrapper">
  <ion-icon name="caret-down" class="nav-toggle"></ion-icon>
  <label for="nav-toggle" class="nav-toggle">{toggleLabel}</label>
  <input type="checkbox" id="nav-toggle" class="nav-toggle" bind:checked={navOpen} on:change={handleNavToggle}>

  <ul class="navigation main" style="--overlay-height: {innerHeight}px">
    <li><a class:active={$isActive('/users')} href={$url('/users')}>User</a></li>
    <li><a class:active={$isActive('/developers')} href={$url('/developers')}>Developer</a>
    </li>
    <li><a class:active={$isActive('/businesses')} href={$url('/businesses')}>Business</a>
    </li>
    <li class="navigation dropdown-toggle">
      <div class="arrow top"></div>
      <a class:active={$route.path.includes('/documentation')} href={$url('/documentation/overview/about-nymea')}>Documentation</a>
      <div class="navigation dropdown">
        <ul>
          <li class="group">
            <div class="group-label">
              <ion-icon name="book"></ion-icon>
              Guides
            </div>
            <ul>
              <li><a class:active={$isActive('/documentation/overview')} href={$url('/documentation/overview/about-nymea')}>Overview</a></li>
              <li><a class:active={$isActive('/documentation/users')} href={$url('/documentation/users/installation/getting-started')}>Users</a></li>
              <li><a class:active={$isActive('/documentation/developers')} href={$url('/documentation/developers')}>Developers</a></li>
            </ul>
          </li>
          <li class="group">
            <div class="group-label">
              <ion-icon name="reader"></ion-icon>
              Resources
            </div>
            <ul>
              <li><a class:active={$isActive('/documentation/resources/integrations')} href={$url('/documentation/resources/integrations')}>Integrations</a></li>
              <li><a class:active={$isActive('/documentation/resources/interfaces')} href={$url('/documentation/resources/interfaces')}>Interfaces</a></li>
              <li><a class:active={$isActive('/documentation/resources/api')} href={$url('/documentation/resources/api')}>API Reference</a></li>
            </ul>
          </li>
          <li class="group">
            <div class="group-label">
              <ion-icon name="heart"></ion-icon>
              Community
            </div>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</div>
