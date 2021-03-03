<script lang="ts">
  import { route } from '@sveltech/routify';
  import GdprBanner from '@beyonk/gdpr-cookie-consent-banner';
  import {
    Content,
    flattenedMenuItems,
    Filter,
    Footer,
    Header,
    Layout,
    Menu,
    Navigation,
    Sidebar,
    TableOfContents
  } from '@nymea/components';
  import Logo from '../../_components/Logo.svelte';
  import { tableOfContents } from '../../_components/table-of-contents/_store.js';

  $: links = $flattenedMenuItems.filter((menuItem) => menuItem.link);
  $: currentIndex = links.findIndex((menuItem) => menuItem.link === $route.api.path);

  const fontSize = 16;

  let outerWidth;
  let breakpoint;
  let gdprBannerConfig = {
    cookieName: 'nymea_gdpr',
    cookieConfig: {
      domain: window.process.env.GDPR_COOKIE_DOMAIN,
      path: '/'
    },
    heading: 'We care about your privacy.',
    description: 'We use cookies to offer a better browsing experience and analyze site traffic. Please review our privacy policy & cookies information page. By clicking accept, you consent to our privacy policy & use of cookies.',
    choices: {
      necessary: {
        label: 'Necessary cookies',
        description: 'Used for cookie control. Can\'t be turned off.',
        value: true
      },
      analytics: {
        label: 'Analytics cookies',
        description: 'Used to control Google Analytics, a 3rd party tool offered by Google to track user behavior.',
        value: true
      },
      tracking: false,
      marketing: false
    },
  };

  $:  if (outerWidth < fontSize * 30) {
        breakpoint = 'xs';
      } else if (outerWidth < fontSize * 48) {
        breakpoint = 'sm';
      } else if (outerWidth >= fontSize * 48 && outerWidth < fontSize * 64) {
        breakpoint = 'md';
      } else if (outerWidth >= fontSize * 64 && outerWidth < fontSize * 75) {
        breakpoint = 'lg';
      } else if (outerWidth >= fontSize * 75 && outerWidth < fontSize * 105) {
        breakpoint = 'xl';
      } else {
        breakpoint = 'xxl';
      }

  function analytics() {
    window['ga-disable-UA-76041850-1'] = false;
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'UA-76041850-1');
  }
</script>

<style>
  .header > :global(header .header-wrapper) {
    border-bottom: 1px solid var(--header-border-color);
  }

  [slot="sidebar-one"] > :global(.sidebar) {
    --sidebar-background: var(--white);
  }

  [slot="content"] {
    border-left: 1px solid var(--header-border-color);
  }


  [slot="sidebar-two"] > :global(.sidebar) {
    --sidebar-background: #fff;
  }

  @media only screen and (min-width: 60em) {
    .header > :global(header .header-wrapper) {
      border-bottom: 0;
    }
    [slot="branding"] {
      --header-branding-background: var(--white);
    }
  }
</style>

<svelte:window bind:outerWidth={outerWidth}/>

<Layout>
  <div slot="header" class="header">
    <Header>
      <div slot="branding">
        <Logo height="3rem" />
      </div>
      <nav slot="navigation">
        <Navigation />
      </nav>
      <div slot="links"></div>
    </Header>
  </div>
  <div slot="sidebar-one">
    <Sidebar>
      <Menu />
    </Sidebar>
  </div>
  <main slot="content">
    <Content>
      <slot />
    </Content>
  </main>
  <div slot="sidebar-two">
    <Sidebar>
      {#if $route.path.includes('/documentation/resources/integrations')}
        <Filter />
      {:else}
        <TableOfContents items={$tableOfContents} />
      {/if}
    </Sidebar>
  </div>
  <div slot="footer">
    <Footer />
  </div>
</Layout>

<GdprBanner {...gdprBannerConfig} on:analytics={analytics} />
