export default function createObjectById(requests) {
  return Object.values(requests).reduce(
    (acc, request) => ({ ...acc, [request._id]: request }),
    {}
  );
}
