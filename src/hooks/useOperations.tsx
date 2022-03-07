import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import { GET_CHARACTER } from "../pages/Character/query";
import { GET_EPISODE_BY_ID } from "../pages/Episode/query";
import { GET_LOCATION_BY_ID } from "../pages/Location/query";

interface handlersType {
  edit: Function;
  delete: Function;
}

/*
    the useOperations hook handles edit/delete functionality for all types (Location, Characters, Episodes).
    This can be extended to use other operations like GET, POST based on type
*/

const mapping = {
  location: {
    GET: GET_LOCATION_BY_ID,
    EDIT: "EDIT_LOCATION",
  },
  episode: {
    GET: GET_EPISODE_BY_ID,
    EDIT: "EDIT_EPISODE",
  },
  character: {
    GET: GET_CHARACTER,
    EDIT: "EDIT_CHARACTER",
  },
};

function useOperations(type: string, id: number) {
  let query;
  try {
    query = mapping[type]["GET"];
  } catch (e) {
    console.log("There was an error with fetching query", e);
  }
  // TODO: useLazyQuery for edit and delete actions
  const { loading, error, data } = useQuery(query, {
    variables: {
      id: id,
    },
  });

  const handlers: handlersType = useMemo(
    function () {
      return {
        edit: (selectedId: number) => {
          console.log("type", type);
          alert(`You want to edit the user with id: ${selectedId} but it is yet to be implemented`);
          // TODO: implement edit operation by opening a modal and updating required fields
        },
        delete: (selectedId: number) => {
          alert(`You want to delete the user with id: ${selectedId} but it is yet to be implemented`);
          // TODO: implement delete functionality after a confirmation popup
        },
      };
    },
    [type]
  );
  return [handlers, loading, data, error];
}
export default useOperations;
