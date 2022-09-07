const ComparisonTable = () => {
  return (
    <table className="table comparison-table">
      <thead>
        <tr>
          <th
            scope="col"
            className="text-center"
            style={{ fontSize: "1.2rem" }}
          >
            Feature
          </th>
          <th
            scope="col"
            className="text-center"
            style={{ fontSize: "1.2rem" }}
          >
            Charles
          </th>
          <th
            scope="col"
            className="text-center"
            style={{ fontSize: "1.2rem" }}
          >
            Requestly
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" style={{ fontSize: "1.1rem" }}>
            Platforms
          </th>
          <td>Native Desktop Application</td>
          <td>Browser Extension, Android SDK, Native Desktop Application</td>
        </tr>
        <tr>
          <th scope="row" style={{ fontSize: "1.1rem" }}>
            Setup
          </th>
          <td>Requires Configuring Proxy & Installing Certificate</td>
          <td>No Setup Required</td>
        </tr>
        <tr>
          <th scope="row" style={{ fontSize: "1.1rem" }}>
            Map local & Remote
          </th>
          <td>✅</td>
          <td>✅</td>
        </tr>
        <tr>
          <th scope="row" style={{ fontSize: "1.1rem" }}>
            Modify Headers
          </th>
          <td>Complicated but possible through the Rewrite feature</td>
          <td>✅</td>
        </tr>
        <tr>
          <th scope="row" style={{ fontSize: "1.1rem" }}>
            Modify API response
          </th>
          <td>
            Complicated (Put breakpoints to modify responses in real-time, which
            often causes timeouts on the client-side and is very cumbersome)
          </td>
          <td>
            ✅{" "}
            <a
              href="https://www.youtube.com/watch?v=KIPbxUGUYq8"
              target="_blank"
              className="demo-link"
            >
              Link to Demo
            </a>
          </td>
        </tr>
        <tr>
          <th scope="row" style={{ fontSize: "1.1rem" }}>
            Breakpoints
          </th>
          <td>✅</td>
          <td>❌</td>
        </tr>
        <tr>
          <th scope="row" style={{ fontSize: "1.1rem" }}>
            Inject Scripts
          </th>
          <td>❌</td>
          <td>
            ✅{" "}
            <a
              href="https://requestly.io/feature/insert-custom-scripts/"
              target="_blank"
              className="demo-link"
            >
              Link to Demo{" "}
            </a>
          </td>
        </tr>
        <tr>
          <th scope="row" style={{ fontSize: "1.1rem" }}>
            Network Throttling
          </th>
          <td>✅</td>
          <td>
            ✅{" "}
            <a
              href="https://requestly.io/feature/delay-request/"
              target="_blank"
              className="demo-link"
            >
              Link to Demo
            </a>
          </td>
        </tr>
        <tr>
          <th scope="row" style={{ fontSize: "1.1rem" }}>
            Sharing
          </th>
          <td>❌</td>
          <td>
            ✅{" "}
            <a
              href="https://requestly.io/blog/share-rules-with-other-users/"
              target="_blank"
              className="demo-link"
            >
              Link to Demo
            </a>
          </td>
        </tr>
        <tr>
          <th scope="row" style={{ fontSize: "1.1rem" }}>
            Mock Server
          </th>
          <td>❌</td>
          <td>Host static JS/CSS files and API responses</td>
        </tr>

        <tr>
          <th scope="row" style={{ fontSize: "1.1rem" }}>
            Session Recording
          </th>
          <td>❌</td>
          <td>
            ✅{" "}
            <a
              href="https://requestly.io/feature/session-recording/"
              target="_blank"
              className="demo-link"
            >
              Link to Demo
            </a>
          </td>
        </tr>
        <tr>
          <th scope="row" style={{ fontSize: "1.1rem" }}>
            Andoid Debugging
          </th>
          <td>
            Debug builds only (Requires complicated setup by adding a
            certificate in code, setting up a proxy on your phone, and
            installing an SSL certificate on phone)
          </td>
          <td>
            Debug builds only (Requires 3-lines of SDK integration). Provides
            Network Inspector, Analytics Inspector, Logs & Stacktraces.
          </td>
        </tr>
        <tr>
          <th scope="row" style={{ fontSize: "1.1rem" }}>
            iOS Debugging
          </th>
          <td>✅</td>
          <td>
            Yes (Using Desktop App) - Almost similar experience, team is working
            on providing native IOS SDK for debug builds.
          </td>
        </tr>
        <tr>
          <th scope="row" style={{ fontSize: "1.1rem" }}>
            Automation Testing
          </th>
          <td>❌</td>
          <td>
            Provides Selenium Integration (Any modifications inside Requestly
            can be used in your e2e automation tests) (Link to npm page)
          </td>
        </tr>
        <tr>
          <th scope="row" style={{ fontSize: "1.1rem" }}>
            Customer Support
          </th>
          <td>❌</td>
          <td>
            Active Support (20% of Chrome Store reviews mentions active support
            from the Requestly team)
          </td>
        </tr>
        <tr>
          <th scope="row" style={{ fontSize: "1.1rem" }}>
            Pricing
          </th>
          <td>Limited Free Edition</td>
          <td>Freemium</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ComparisonTable;
