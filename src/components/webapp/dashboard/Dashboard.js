import React, { useState } from "react";
import DashboardWrapper from "./DashboardWrapper";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  MenuItem,
  NativeSelect,
  Select,
  Typography,
} from "@mui/material";

import { Link as RouteLink } from "react-router-dom";

import {
  OverviewDetails,
  lastVoucherDate,
  selectionModule,
  totalSales,
  totalVoucherNumber,
} from "./dashboarddetails/DashboardDetails";
import { ArrowRightAlt } from "@mui/icons-material";

const Dashboard = () => {
  const [selectedModule, setSelectedModule] = useState("");

  const handleSelectionModule = (e) => {
    setSelectedModule(e.target.value);
  };

  const SeclectionModule = selectionModule.map((item, i) => {
    return (
      <option key={i} value={item} defaultValue={item[0]}>
        {item}
      </option>
    );
  });
  return (
    <DashboardWrapper>
      <Box sx={{ px: 2, py: 1 }}>
        <Grid container spacing={6}>
          <Grid item xs={2}>
            {/* selection module dropdown */}
            <FormControl fullWidth>
              <NativeSelect
                id="selection-module"
                defaultValue={"Finance"}
                value={selectedModule}
                a
                onChange={handleSelectionModule}
              >
                {SeclectionModule}
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={10}>
            {/* Overview of Total Sales, Total Voucher Number and Last Voucher Date */}

            <Box>
              <Grid container columnGap={6} justifyContent={"center"}>
                <Grid item xs={3}>
                  <Card>
                    <Typography className="text-center">
                      Total Sales: {totalSales}
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <Card>
                    <Typography className="text-center">
                      Total Voucher Number: {totalVoucherNumber}
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <Card>
                    <Typography className="text-center">
                      Last Voucher Date:{" "}
                      {lastVoucherDate.toLocaleDateString("en-US")}
                    </Typography>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            py: 5,
          }}
          columnGap={2}
        >
          {/* Overview boxes */}
          {OverviewDetails.map((detail, i) => {
            return (
              <Grid item key={i} xs={6} md={2}>
                <Card>
                  <CardActionArea component={RouteLink} to={`${detail.route}`}>
                    <CardHeader
                      title={`${detail.title}`}
                      className="header-color"
                    />
                    <CardContent>
                      <Typography className="fs-6">
                        View Details
                        <span className="right-arrow">
                          <ArrowRightAlt />
                        </span>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Box>Charts seciton</Box>
      </Box>
    </DashboardWrapper>
  );
};

export default Dashboard;
