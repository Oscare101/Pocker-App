import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

const patternList = [
  ['admit', 'doing'],
  ['avoid', 'doing'],
  ["can't stand", 'doing'],
  ['deny', 'doing'],
  ['dislike', 'doing'],
  ['enjoy', 'doing'],
  ['feel like', 'doing'],
  ['finish', 'doing'],
  ['hate', 'doing'],
  ['imagine', 'doing'],
  ['keep', 'doing'],
  ['like', 'doing'],
  ['love', 'doing'],
  ['mind', 'doing'],
  ['miss', 'doing'],
  ['practise', 'doing'],
  ['prefer', 'doing'],
  ['recommend', 'doing'],
  ['spend', 'doing'],
  ['stop', 'doing'],
  ['suggest', 'doing'],
  ['afford', 'to do'],
  ['agree', 'to do'],
  ['arrange', 'to do'],
  ['be able', 'to do'],
  ['choose', 'to do'],
  ['decide', 'to do'],
  ['expext', 'to do'],
  ['forget', 'to do'],
  ['help', 'to do'],
  ['hope', 'to do'],
  ['learn', 'to do'],
  ['manage', 'to do'],
  ['need', 'to do'],
  ['offer', 'to do'],
  ['plan', 'to do'],
  ['pretend', 'to do'],
  ['promise', 'to do'],
  ['refuse', 'to do'],
  ['remember', 'to do'],
  ['seem', 'to do'],
  ['try', 'to do'],
  ['want', 'to do'],
  ['would like', 'to do'],
  ['advise', 'sbd to do smth'],
  ['allow', 'sbd to do smth'],
  ['ask', 'sbd to do smth'],
  ['invite', 'sbd to do smth'],
  ['need', 'sbd to do smth'],
  ['order', 'sbd to do smth'],
  ['persuade', 'sbd to do smth'],
  ['teach', 'sbd to do smth'],
  ['tell', 'sbd to do smth'],
  ['want', 'sbd to do smth'],
  ['let', 'sbd do smth'],
  ['make', 'sbd do smth'],
]

export default function Screen2() {
  const [list, setList] = useState('')
  const [answer, setAnswer] = useState('?')
  const [time, setTime] = useState('?')

  let ex
  const Question = () => {
    ex = patternList[Math.floor(Math.random() * patternList.length)]
    setList(ex[0])
    setTime(ex[1])
    setAnswer('?')
  }

  const GetAnswer = () => {
    setAnswer(time)
  }

  return (
    <View style={styles.view}>
      <View style={styles.row}>
        <Text style={styles.text} selectable>
          {list}{' '}
        </Text>
        <TouchableOpacity onPress={() => GetAnswer()}>
          <Text style={styles.answer}>{answer}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        title="test"
        onPress={() => Question()}
        style={styles.button}
      >
        <FontAwesome5 name="dice" size={44} color="#555" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  row: { flexDirection: 'row' },
  text: {
    fontSize: 34,
    letterSpacing: 2,
  },
  button: {
    padding: 50,
  },
  answer: {
    fontSize: 34,
    color: 'blue',
  },
})
