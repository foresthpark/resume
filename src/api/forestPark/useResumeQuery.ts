import RESUME_QUERY from "./resumeQuery";
import { useLazyQuery, useQuery } from "@apollo/client";
import { useEffect } from "react";

const useResumeQuery = () => {
  const { data, loading, error, refetch } = useQuery(RESUME_QUERY);

  const [resumeQuery] = useLazyQuery(RESUME_QUERY);

  return { resumeQuery, loading, data, refetch, error };
};

export default useResumeQuery;
