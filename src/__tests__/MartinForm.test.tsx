import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MartinForm } from '@/components/Martin-Form/MartinForm.tsx';
import * as SheetPrimitive from "@radix-ui/react-dialog";

jest.mock("@/components/ui/sheet", () => {
  const actual = jest.requireActual("@/components/ui/sheet");
  return {
    ...actual,
    Sheet: ({ children, open, onOpenChange }: any) => (
      <SheetPrimitive.Root open={open} onOpenChange={onOpenChange}>
        {children}
      </SheetPrimitive.Root>
    ),
    SheetContent: ({ children, className, ...props }: any) => (
      <div className={className} {...props} data-testid="sheet-content">
        {children}
      </div>
    ),
    SheetTrigger: ({ children }: any) => <div>{children}</div>,
    SheetClose: ({ children }: any) => <div>{children}</div>,
    SheetHeader: ({ children }: any) => <div>{children}</div>,
    SheetFooter: ({ children, className }: any) => <div className={className}>{children}</div>,
    SheetTitle: ({ children }: any) => <div>{children}</div>,
    SheetDescription: ({ children }: any) => <div>{children}</div>,
  };
});

const originalConsoleLog = console.log;
let consoleOutput: any[] = [];
beforeEach(() => {
  consoleOutput = [];
  console.log = jest.fn((...args) => {
    consoleOutput.push(args);
    originalConsoleLog(...args);
  });
});
afterEach(() => {
  console.log = originalConsoleLog;
  jest.clearAllMocks();
});

describe("MartinForm Component", () => {
  test("renders the form button", () => {
    render(<MartinForm />);
    expect(screen.getByText("Martin")).toBeInTheDocument();
  });

  test("all form inputs exist", () => {
    render(<MartinForm />);
    fireEvent.click(screen.getByText("Martin"));
    expect(screen.getByTestId("name-input")).toBeInTheDocument();
    expect(screen.getByTestId("username-input")).toBeInTheDocument();
    expect(screen.getByTestId("email-input")).toBeInTheDocument();
    expect(screen.getByTestId("password-input")).toBeInTheDocument();
    expect(screen.getByTestId("weight-input")).toBeInTheDocument();
    expect(screen.getByTestId("cancel-button")).toBeInTheDocument();
    expect(screen.getByTestId("confirm-button")).toBeInTheDocument();
  });
});

test("confirm button is initially disabled", () => {
    render(<MartinForm />);
    fireEvent.click(screen.getByText("Martin"));
    expect(screen.getByTestId("confirm-button")).toBeDisabled();
  });

  test("confirm button enabled when form is valid", async () => {
    render(<MartinForm />);
    fireEvent.click(screen.getByText("Martin"));

    fireEvent.change(screen.getByTestId("name-input"), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByTestId("username-input"), { target: { value: "johndoe" } });
    fireEvent.change(screen.getByTestId("email-input"), { target: { value: "john@gmail.com" } });
    fireEvent.change(screen.getByTestId("password-input"), { target: { value: "password123" } });
    fireEvent.change(screen.getByTestId("weight-input"), { target: { value: "75" } });

    await waitFor(() => {
      expect(screen.getByTestId("confirm-button")).not.toBeDisabled();
    });
  });

test("email validation fails without @gmail.com", async () => {
    render(<MartinForm />);
    fireEvent.click(screen.getByText("Martin"));

    fireEvent.change(screen.getByTestId("email-input"), { target: { value: "wro1ng@outlook.com" } });
    fireEvent.blur(screen.getByTestId("email-input"));
    fireEvent.click(screen.getByTestId("confirm-button"));

    await waitFor(() => {
      expect(screen.getByTestId("email-error")).toHaveTextContent("Must have @gmail.com");
    });
  });

test("form submission logs correct data", async () => {
    render(<MartinForm />);
    fireEvent.click(screen.getByText("Martin"));

    fireEvent.change(screen.getByTestId("name-input"), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByTestId("username-input"), { target: { value: "johndoe" } });
    fireEvent.change(screen.getByTestId("email-input"), { target: { value: "john@gmail.com" } });
    fireEvent.change(screen.getByTestId("password-input"), { target: { value: "password123" } });
    fireEvent.change(screen.getByTestId("weight-input"), { target: { value: "75" } });

    fireEvent.click(screen.getByTestId("confirm-button"));

    await waitFor(() => {
      expect(consoleOutput).toEqual(
        expect.arrayContaining([
          expect.arrayContaining([
            "Form Data:",
            {
              name: "John Doe 2",
              username: "johndoe",
              email: "john@gmail.com",
              password: "password123",
              weight: "75"
            }
          ])
        ])
      );
    });
  });

  test("cancel button resets all fields", async () => {
    render(<MartinForm />);
    fireEvent.click(screen.getByText("Martin"));

    fireEvent.change(screen.getByTestId("name-input"), { target: { value: "Test" } });
    fireEvent.change(screen.getByTestId("username-input"), { target: { value: "testuser" } });
    fireEvent.change(screen.getByTestId("email-input"), { target: { value: "test@gmail.com" } });
    fireEvent.change(screen.getByTestId("password-input"), { target: { value: "pass1234" } });
    fireEvent.change(screen.getByTestId("weight-input"), { target: { value: "60" } });

    fireEvent.click(screen.getByTestId("cancel-button"));
    fireEvent.click(screen.getByText("Martin"));

    await waitFor(() => {
      expect(screen.getByTestId("name-input")).toHaveValue("");
      expect(screen.getByTestId("username-input")).toHaveValue("");
      expect(screen.getByTestId("email-input")).toHaveValue("");
      expect(screen.getByTestId("password-input")).toHaveValue("");
      expect(screen.getByTestId("weight-input")).toHaveValue("");
    });
  });

  test("submit resets all fields", async () => {
    render(<MartinForm />);
    fireEvent.click(screen.getByText("Martin"));

    fireEvent.change(screen.getByTestId("name-input"), { target: { value: "Submit" } });
    fireEvent.change(screen.getByTestId("username-input"), { target: { value: "submituser" } });
    fireEvent.change(screen.getByTestId("email-input"), { target: { value: "submit@gmail.com" } });
    fireEvent.change(screen.getByTestId("password-input"), { target: { value: "submit1234" } });
    fireEvent.change(screen.getByTestId("weight-input"), { target: { value: "80" } });

    fireEvent.click(screen.getByTestId("confirm-button"));
    fireEvent.click(screen.getByText("Martin"));

    await waitFor(() => {
      expect(screen.getByTestId("name-input")).toHaveValue("");
      expect(screen.getByTestId("username-input")).toHaveValue("");
      expect(screen.getByTestId("email-input")).toHaveValue("");
      expect(screen.getByTestId("password-input")).toHaveValue("");
      expect(screen.getByTestId("weight-input")).toHaveValue("");
    });
  });