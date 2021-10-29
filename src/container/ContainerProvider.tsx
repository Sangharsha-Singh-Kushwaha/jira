import { Container, Row, Col } from "reactstrap";
import LeftNavbar from "../components/navbar/LeftNavbar";
import MainNavbar from "../components/navbar/MainNavbar";
import Board from "../Pages/Board";
import classes from "./ContainerProvider.module.css";
import BreadcrumbBoard from "../components/board/BreadcrumbBoard";
import PageNameAndButton from "../components/board/PageNameAndButton";
import FormAndButton from "../components/board/FormAndButton";

const ContainerProvider = () => {
  return (
    <Container fluid>
      <Row className={classes.row}>
        <Col xs={12} md={1} className={classes.colleftnavbar}>
          <LeftNavbar />
        </Col>

        <Col xs={12} md={3} lg={2} className={classes.colnavbar}>
          <MainNavbar />
        </Col>

        <Col xs={12} md={8} lg={9}>
          <BreadcrumbBoard
            title1="Project"
            title2="singularity 1.O"
            title3="kanban Board"
          />
          <PageNameAndButton />
          <FormAndButton/>
          <Board />
        </Col>
      </Row>
    </Container>
  );
};

export default ContainerProvider;
