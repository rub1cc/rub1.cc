module.exports = {
  async redirects() {
    return [
      {
        source: '/cv',
        destination: 'https://s.id/faraz',
        permanent: true,
      },
    ]
  },
}
