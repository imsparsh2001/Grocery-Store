
import React from 'react';
import { Modal,TextInput, View, Text, TouchableOpacity,TouchableWithoutFeedback } from 'react-native';
import { DataTable } from 'react-native-paper'; 
import styles from '../styles/header';

const CustomModal = ({ isOpen, handleClose, setModalOpen }) => {
 

  if (!isOpen) return null;

  return (
    <Modal transparent animationType="slide" visible={isOpen}  >
      <TouchableWithoutFeedback >
      <View style={styles.modalOverlay}  >
        <View style={styles.popupBody}>
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>&times;</Text>
          </TouchableOpacity>
          <Text style={styles.headline}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              Choose Your Delivery location
            </Text>
          </Text>
          <Text style={styles.description}>Enter your address, and we will specify the offer your area.</Text>
          <TextInput style={styles.areaSearch} placeholder="Search your area." placeholderTextColor="#555" />
         
      <DataTable style={styles.locationTable}>
        <DataTable.Header style={styles.header}>
          <DataTable.Title style={styles.headerText}>Location</DataTable.Title>
          <DataTable.Title style={styles.headerText}>Min Amount</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row style={styles.row}>
          <DataTable.Cell style={styles.cell}>Albama</DataTable.Cell>
          <DataTable.Cell style={styles.cell}>$20</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={styles.row}>
          <DataTable.Cell style={styles.cell}>Alaska</DataTable.Cell>
          <DataTable.Cell style={styles.cell}>$30</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row style={styles.row}>
          <DataTable.Cell style={styles.cell}>Albama</DataTable.Cell>
          <DataTable.Cell style={styles.cell}>$20</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={styles.row}>
          <DataTable.Cell style={styles.cell}>Alaska</DataTable.Cell>
          <DataTable.Cell style={styles.cell}>$30</DataTable.Cell>
        </DataTable.Row>


      </DataTable>
         
      </View>
      </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default CustomModal;

