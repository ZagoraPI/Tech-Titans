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

// Mock console.log
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

test("email validation fails without @gmail.com", async () => {
    render(<MartinForm />);
    fireEvent.click(screen.getByText("Martin"));

    fireEvent.change(screen.getByTestId("email-input"), { target: { value: "wrong@outlook.com" } });
    fireEvent.blur(screen.getByTestId("email-input"));
    fireEvent.click(screen.getByTestId("confirm-button"));

    await waitFor(() => {
      expect(screen.getByTestId("email-error")).toHaveTextContent("Must have @gmail.com");
    });
  });
