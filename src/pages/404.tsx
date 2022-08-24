const NotFound = () => {
  return <h1>Page not found</h1>;
};

export default NotFound;

export const getStaticProps = () => ({
  props: {
    hideNavbar: true,
    hideAudioPlayer: true,
    namespacesRequired: [
      'common',
      'auth',
      'post',
      'cart',
      'channel',
      'social',
      'talent',
      'wishlist',
    ],
  },
});
