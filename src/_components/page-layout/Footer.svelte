<script lang="ts">
  import { url } from '@sveltech/routify';
  import Col from '../grid/Col.svelte';
  import Grid from '../grid/Grid.svelte';
  import Row from '../grid/Row.svelte';
  import Logo from '../Logo.svelte';
</script>

<style>
  footer {
    background: var(--nymea-gradient);
    border-top: 1px solid var(--green-base);
    padding: var(--space-10) 0;
    position: relative;
    z-index: 4;
  }

  @media only screen and (min-width: 48em) {
    footer {
      padding: 6rem 0;
    } 
  }

  footer > :global(.grid .row:first-child > .col:first-child .logo) {
    margin-bottom: 1.5rem;
  }

  @media only screen and (min-width: 64em) {
    footer > :global(.grid .row:first-child) {
      height: calc(2 * var(--space-10));
    }

    footer > :global(.grid .row:first-child > .col:first-child) {
      position: relative;
    }
    
    footer > :global(.grid .row:first-child > .col:first-child .logo) {
      margin-bottom: 0;
      position: absolute;
        bottom: -2.2rem;
        left: 0;
      transform: rotate(270deg);
      transform-origin: left top;
    }
  }

  .sitemap .menu {
    margin-left: 0;
  }

  .sitemap span {
    color: var(--text-color-inverse);
    display: block;
    font-size: 0.8rem;
    letter-spacing: 0.01em;
    text-transform: uppercase;
  }

  .sitemap span + ul {
    margin: 0 0 1.5rem;
  }

  @media only screen and (min-width: 48em) {
    .sitemap span + ul:last-child {
      margin-bottom: 0;
    }
  }

  .sitemap a {
    color: var(--turquoise-darken-30);
    text-decoration: none;
  }

  footer > :global(.grid .row:first-child > .col:nth-child(2)) {
    display: flex;
    flex-direction: column;
  }

  .mission {
    color: var(--turquoise-darken-30);
  }

  .copyright {
    color: var(--text-color-inverse);
    font-size: 0.8rem;
    letter-spacing: 0.01em;
    margin: var(--space-07) 0 var(--space-09);
    text-transform: uppercase;
  }

  @media only screen and (min-width: 48em) {
    .copyright {
      margin: var(--space-07) 0 var(--space-09);
    }
  }

  @media only screen and (min-width: 64em) {
    .copyright {
      border-bottom: 0;
      margin: auto 0 0;
      padding-bottom: 0;
    }
  }
</style>

<footer>
  <Grid width={{'xs': '100%', 'sm': '100%', 'md': '64em', 'lg': '75em', 'xl': '75em'}}>
    <nav class="sitemap">
      <Row>
        <Col span={{'xs': 12, 'sm': 5, 'md': 1, 'lg': 1, 'xl': 1}}>
          <Logo text="true" width="11.5rem" />
        </Col>
        <Col span={{'xs': 12, 'sm': 6, 'md': 4, 'lg': 4, 'xl': 4}}>
          <p class="mission">Nymea strives to simplify communication for connected products. We are dedicated to open-source and we believe that transparency and openness is a better way to bind customers than to lock them in.</p>
          <div class="copyright">
            <p>&copy; 2020 nymea GmbH &middot; All rights reserved.</p>
          </div>
        </Col>
        <Col span={{'xs': 12, 'sm': 2, 'md': 2, 'lg': 2, 'xl': 2}} offset={{'xs': 0, 'sm': 5, 'md': 1, 'lg': 1, 'xl': 1}}>
          <span>Products</span>
          <ul class="menu">
            <li>
              <a href={$url('/users')}>For Users</a>
            </li>
            <li>
              <a href={$url('/developers')}>For Developers</a>
            </li>
            <li>
              <a href={$url('/businesses')}>For Businesses</a>
            </li>
          </ul>

          <span>Company</span>
          <ul class="menu">
            <li>
              <a href={$url('/imprint')}>Imprint</a>
            </li>
            <li>
              <a href={$url('/contact')}>Contact</a>
            </li>
          </ul>
        </Col>
        <Col span={{'xs': 12, 'sm': 2, 'md': 2, 'lg': 2, 'xl': 2}}>
          <ul class="menu">
            <li>
              <span>Documentation</span>
              <ul class="menu">
                <li>
                  <a href={$url('/documentation/overview/about-nymea')}>Overview</a>
                </li>
                <li>
                  <a href={$url('/documentation/users/installation/getting-started')}>Users</a>
                </li>
                <li>
                  <a href={$url('/documentation/developers')}>Developers</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="$url('/documentation/resources/integrations')">Integrations</a>
                </li>
                <li>
                  <a href="$url('/documentation/resources/interfaces')">Interfaces</a>
                </li>
                <li>
                  <a href="$url('/documentation/resources/api')">API Reference</a>
                </li>
              </ul>
            </li>
          </ul>
        </Col>
        <Col span={{'xs': 12, 'sm': 2, 'md': 2, 'lg': 2, 'xl': 2}}>
          <ul class="menu">
            <li>
              <span>Community</span>
              <ul>
                <li>
                  <a href="https://forum.nymea.io/" target="_blank" rel="noopener">Forum</a>
                </li>
                <li>
                  <a href="https://github.com/nymea" target="_blank" rel="noopener">Github</a>
                </li>
                <li>
                  <a href="https://t.me/nymeacommunity" target="_blank" rel="noopener">Telegram</a>
                </li>
                <li>
                  <a href="https://discordapp.com/channels/652494572298960926/652494572298960929" target="_blank" rel="noopener">Discord</a>
                </li>
                <li>
                  <a href="https://twitter.com/nymea_io" target="_blank" rel="noopener">Twitter</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/nymea.io" target="_blank" rel="noopener">Facebook</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/user/gearupyourhome" target="_blank" rel="noopener">YouTube</a>
                </li>
              </ul>
            </li>
          </ul>
        </Col>
      </Row>
    </nav>
  </Grid>
</footer>
