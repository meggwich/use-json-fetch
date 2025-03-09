import useJsonFetch from "../useJsonFetch";

interface FetchComponentProps {
  url: string;
  label: string;
}

const FetchComponent = ({ url, label }: FetchComponentProps) => {
  const [data, loading, error] = useJsonFetch(url);

  return (
    <div>
      <h3>{label}</h3>
      {loading && <p>Loading...</p>}
      {error && error instanceof Error && <p>{error.message}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default FetchComponent;