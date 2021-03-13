import { enableExpoCliLogging } from 'expo/build/logs/Logs'
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export default function () {
  const [school11, setSchool11] = useState('')
  const [school12, setSchool12] = useState('')
  const [school13, setSchool13] = useState('')
  const [school14, setSchool14] = useState('')
  const [school15, setSchool15] = useState('')
  const [school16, setSchool16] = useState('')
  const [school21, setSchool21] = useState('')
  const [school22, setSchool22] = useState('')
  const [school23, setSchool23] = useState('')
  const [school24, setSchool24] = useState('')
  const [school25, setSchool25] = useState('')
  const [school26, setSchool26] = useState('')
  const [school31, setSchool31] = useState('')
  const [school32, setSchool32] = useState('')
  const [school33, setSchool33] = useState('')
  const [school34, setSchool34] = useState('')
  const [school35, setSchool35] = useState('')
  const [school36, setSchool36] = useState('')

  const [school1, setSchool1] = useState('')
  const [school2, setSchool2] = useState('')
  const [school3, setSchool3] = useState('')
  const [school4, setSchool4] = useState('')
  const [school5, setSchool5] = useState('')
  const [school6, setSchool6] = useState('')

  const ChangeItem = () => {
    if (school11 && school21 && school31) {
      if (school11 >= school21) {
        if (school11 >= school31) {
          setSchool1(school11)
        } else {
          setSchool1(school31)
        }
      } else {
        if (school21 >= school31) {
          setSchool1(school21)
        } else {
          setSchool1(school31)
        }
      }
    }

    if (school12 && school22 && school32) {
      if (school12 >= school22) {
        if (school12 >= school32) {
          setSchool2(school12)
        } else {
          setSchool2(school32)
        }
      } else {
        if (school22 >= school32) {
          setSchool2(school22)
        } else {
          setSchool2(school32)
        }
      }
    }

    return (
      <>
        <Text style={styles.number}>{school1}</Text>
        <Text style={styles.number}>{school2}</Text>
        <Text style={styles.number}>{school3}</Text>
        <Text style={styles.number}>{school4}</Text>
        <Text style={styles.number}>{school5}</Text>
        <Text style={styles.number}>{school6}</Text>
      </>
    )
  }

  return (
    <View style={styles.view}>
      <View style={styles.row}>
        <View style={styles.itemNumber}>
          <Text style={styles.number}>1</Text>
          <Text style={styles.number}>2</Text>
          <Text style={styles.number}>3</Text>
          <Text style={styles.number}>4</Text>
          <Text style={styles.number}>5</Text>
          <Text style={styles.number}>6</Text>
        </View>
        <View style={styles.columnItem}>
          <TextInput
            placeholder="-"
            value={school11}
            onChangeText={(data) => setSchool11(data)}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="-"
            value={school12}
            onChangeText={(data) => setSchool12(data)}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="-"
            value={school13}
            onChangeText={(data) => setSchool13(data)}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="-"
            value={school14}
            onChangeText={(data) => setSchool14(data)}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="-"
            value={school15}
            onChangeText={(data) => setSchool15(data)}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="-"
            value={school16}
            onChangeText={(data) => setSchool16(data)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.columnItem}>
          <TextInput
            placeholder="-"
            value={school21}
            onChangeText={(data) => setSchool21(data)}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="-"
            value={school22}
            onChangeText={(data) => setSchool22(data)}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="-"
            value={school23}
            onChangeText={(data) => setSchool23(data)}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="-"
            value={school24}
            onChangeText={(data) => setSchool24(data)}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="-"
            value={school25}
            onChangeText={(data) => setSchool25(data)}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="-"
            value={school26}
            onChangeText={(data) => setSchool26(data)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.columnItem}>
          <TextInput
            placeholder="-"
            value={school31}
            onChangeText={(data) => setSchool31(data)}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="-"
            value={school32}
            onChangeText={(data) => setSchool32(data)}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="-"
            value={school33}
            onChangeText={(data) => setSchool33(data)}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="-"
            value={school34}
            onChangeText={(data) => setSchool34(data)}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="-"
            value={school35}
            onChangeText={(data) => setSchool35(data)}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="-"
            value={school36}
            onChangeText={(data) => setSchool36(data)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.columnItem}>
          <ChangeItem />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  columnItem: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#555',
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    padding: 5,
  },
})
