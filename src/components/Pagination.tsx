import { Button } from "@chakra-ui/react";
import ChocPagination from "@choc-ui/paginator";
import { forwardRef } from "react";
import { LIMIT } from "../utils";

interface Props {
  total: number;
  currentPage?: number;
  limit?: number;
}

const Pagination = ({ total, currentPage, limit }: Props) => {
  const Prev = forwardRef((props: any) => (
    <Button
      {...props}
      variant="outline"
      disabled={props?.onClick ? false : true}
    >
      {"<"}
    </Button>
  ));

  const Next = forwardRef((props: any) => (
    <Button
      {...props}
      variant="outline"
      disabled={props?.onClick ? false : true}
    >
      {">"}
    </Button>
  ));

  return (
    <ChocPagination
      total={total}
      currentPage={currentPage}
      pageSize={limit || LIMIT}
      size={"sm"}
      paginationProps={{ display: "flex", justifyContent: "center" }}
      activeStyles={{
        bg: "black",
        color: "white",
        _hover: {
          bg: "black",
        },
      }}
      baseStyles={{
        bg: "white",
        color: "black",
      }}
      hoverStyles={{
        bg: "gray.50",
      }}
      itemRender={(_, type) => {
        if (type === "prev") {
          return Prev;
        } else if (type === "next") {
          return Next;
        }
      }}
    />
  );
};

export default Pagination;
