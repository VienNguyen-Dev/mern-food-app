import { useMutation } from "react-query";
const VITE_BASE_URL = import.meta.env.VITE_BASE_API_URL;

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};
export const useCreateUser = () => {
  const CreateUserRequest = async (user: CreateUserRequest) => {
    const response = await fetch(`${VITE_BASE_URL}/api/my/user/createUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response) {
      throw new Error("Create user error");
    }
  };
  const { mutateAsync: createUser, isLoading, isError, isSuccess } = useMutation(CreateUserRequest);
  return {
    createUser,
    isLoading,
    isError,
    isSuccess,
  };
};
