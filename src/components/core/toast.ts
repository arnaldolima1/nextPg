import { toast } from "sonner";

type ToastHandlerOptions<T> = {
  action: () => Promise<T>; // Função assíncrona que retorna os dados
  loadingMessage: string; // Mensagem exibida enquanto carrega
  successMessage: string; // Mensagem exibida no sucesso
  errorMessage: string; // Mensagem genérica de erro
  getErrorDescription?: (response: T) => string | undefined; // Função para pegar o erro do response
  onSuccess?: (response: T) => void; // Callback opcional no sucesso
  onError?: (error: any) => void; // Callback opcional no erro
};

export async function handleToast<T>({
  action,
  loadingMessage,
  successMessage,
  errorMessage,
  getErrorDescription,
  onSuccess,
  onError,
}: ToastHandlerOptions<T>) {
  const toastId = toast.loading(loadingMessage);

  try {
    const response = await action();

    const errorDescription = getErrorDescription?.(response);

    if (errorDescription) {
      toast.error(errorMessage, {
        id: toastId,
        description: errorDescription,
      });
      return;
    }

    toast.success(successMessage, { id: toastId });

    onSuccess?.(response);
    return response;
  } catch (error: any) {
    toast.error(errorMessage, {
      id: toastId,
      description: error.message || errorMessage,
    });

    onError?.(error);
  }
}
