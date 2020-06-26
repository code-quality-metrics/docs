module.exports = {
  someSidebar: {
    "Node JS": [
      "node/intro",
      "node/web-server",
      "node/require",
      "node/events",
      {
        "Advanced node": [
          "node/advanced/clusters",
          "node/advanced/repl",
          "node/advanced/global-process-buffer",
          "node/advanced/streams",
          "node/advanced/event-loop",
          "node/advanced/modularity",
          "node/advanced/net",
          "node/advanced/udp",
        ],
      },
      {
        Cryptography: [
          "node/cryptography/crypto",
          "node/cryptography/passwords",
          "node/cryptography/data-at-rest",
          "node/cryptography/data-in-transit",
          "node/cryptography/mfa",
        ],
      }
    ],
    "AWS + Docker": [
      "aws/intro",
      "aws/microservices",
      {
        "Practical examples": [
          "aws/examples/example1",
          "aws/examples/example2"
        ]
      }
    ],
    React: [],
  },
};
