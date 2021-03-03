<script>
  import GdprBanner from '@beyonk/gdpr-cookie-consent-banner';
  import Content from '../_components/layout/Content.svelte';
  import Footer from '../_components/layout/Footer.svelte';
  import Header from '../_components/page-layout/Header.svelte';
  import Navigation from '../_components/Navigation.svelte';
  import Layout from '../_components/layout/Layout.svelte';
  import Logo from '../_components/Logo.svelte';

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

  function analytics() {
    console.log('toggle analytics');
    window['ga-disable-UA-76041850-1'] = false;
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'UA-76041850-1');
  }
</script>

<style>
  :root {
    --header-background: rgba(255, 255, 255, 0.9);
    --header-height: 4.5rem;
    --sider-height: calc(100vh - var(--header-height));
  }

  .header {
    height: var(--header-height);
  }

  .header > :global(header) {
    border-bottom: 1px solid var(--header-border-color);
  }

  .header :global(.navigation-wrapper)  {
    border-left: 0;
  }

  :global(.layout .content-wrapper) [slot="content"] {
    flex-basis: 100%;
  }
</style>

<Layout
  width={{'xs': '100%', 'sm': '100%', 'md': '100%', 'lg': '100%', 'xl': '100%'}}
  contentSpan={{'xs': 12, 'sm': 12, 'md': 12, 'lg': 12, 'xl': 12}}
>
  <div slot="header" class="slot header">
    <Header>
      <div slot="branding" class="branding header">
        <Logo height="3rem" />
      </div>
      <nav slot="navigation" class="navigation header">
        <Navigation />
      </nav>
      <div slot="links"></div>
    </Header>
  </div>
  <div slot="content" class="slot">
    <Content main>
      <slot />
    </Content>
  </div>
  <div slot="footer" class="slot footer">
    <Footer />
  </div>
</Layout>

<GdprBanner {...gdprBannerConfig} on:analytics={analytics} />
