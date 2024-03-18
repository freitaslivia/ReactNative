import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const App = () => {
  const produtos = [
    {
      id: '001',
      nome: 'Smartphone Samsung',
      preco: 'R$200',
    },
    {
      id: '002',
      nome: 'Smarphone Apple',
      preco: 'R$250',
    },
    {
      id: '003',
      nome: 'Smartphone Redmi',
      preco: 'R$300',
    },
    {
      id: '004',
      nome: 'Smartphone LG',
      preco: 'R$400',
    }
  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.nome}</Text>
            <Text style={styles.itemPrice}>{item.preco}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemTitle: {
    fontSize: 18,
    color: '#333',
  },
  itemPrice: {
    fontSize: 16,
    color: '#666',
  }
})

export default App;