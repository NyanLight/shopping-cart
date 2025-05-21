import { Link } from "react-router";

export function Error() {
  return (
    <div>
      <div>
        Oooops, wrong page! Click <strong><Link to="/">here</Link></strong> to come back to
        homepage.
      </div>
    </div>
  );
}
