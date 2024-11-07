
import Header from "../Common/Header"
import { SafeAreaView, View, Text, ScrollView, StyleSheet } from "react-native";
import { DataTable } from 'react-native-paper';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardItems } from "../../slices/dashboardSlices";

export default ItemsDashboard = ({ routes }) => {
    const [page, setPage] = useState(0)
    const [numberOfItemsPerPageList] = useState([10, 20, 50]);
    const [itemsPerPage, onItemsPerPageChange] = useState(
      numberOfItemsPerPageList[0]
    );
    const dispatch = useDispatch()
    const dashboardState = useSelector(state => state.dashboard);

    useState(() => {
      dispatch(fetchDashboardItems())
    }, [])


    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, dashboardState.dashboardItems.length);

    return (
        <SafeAreaView style={{ flex: 1 }}>
          <Header screenName={'ItemsDashboard'}></Header>
          <View style={styles.container}>
          <ScrollView>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Test Time</DataTable.Title>
                <DataTable.Title>Shift</DataTable.Title>
                <DataTable.Title>Unit</DataTable.Title>
                {/* <DataTable.Title>Location</DataTable.Title>
                <DataTable.Title>Potato Grade</DataTable.Title>
                <DataTable.Title>Overall Grade</DataTable.Title>
                <DataTable.Title>Verify</DataTable.Title> */}
              </DataTable.Header>

              {dashboardState.dashboardItems.slice(from, to).map((item) => (
                <DataTable.Row key={item.key}>
                  <DataTable.Cell style={styles.tableCol}>{item.title}</DataTable.Cell>
                  <DataTable.Cell style={styles.tableCol}>{item.title}</DataTable.Cell>
                  <DataTable.Cell style={styles.tableCol}>{item.title}</DataTable.Cell>
                  {/* <DataTable.Cell style={{width: 20}}>{item.title}</DataTable.Cell>
                  <DataTable.Cell style={{width: 20}}>{item.title}</DataTable.Cell>
                  <DataTable.Cell style={{width: 20}}>{item.fat}</DataTable.Cell>
                  <DataTable.Cell style={{width: 20}}>{item.title}</DataTable.Cell> */}
                </DataTable.Row>
              ))}

              <DataTable.Pagination
                page={page}
                numberOfPages={Math.ceil(dashboardState.dashboardItems.length / itemsPerPage)}
                onPageChange={(page) => setPage(page)}
                label={`${from + 1}-${to} of ${dashboardState.dashboardItems.length}`}
                numberOfItemsPerPageList={numberOfItemsPerPageList}
                numberOfItemsPerPage={itemsPerPage}
                onItemsPerPageChange={onItemsPerPageChange}
                showFastPaginationControls
                selectPageDropdownLabel={'Rows per page'}
              />
            </DataTable>
            </ScrollView>
          </View>
        </SafeAreaView>
      )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: '#AFCFF3'
  },
  tableCol: {
    width: 25
  }
});
