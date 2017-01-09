import React, { Component } from 'react'
import { Picker, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { employeeUpdate } from '../actions'
import { Card, CardSection, Input } from './common'

class EmployeeForm extends Component {
  render () {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder='Jane'
            keyboardType='default'
            value={this.props.name}
            onChangeText={text => this.props.employeeUpdate({prop: 'name', value: text})}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="0893-209-908"
            keyboardType='phone-pad'
            value={this.props.phone}
            onChangeText={text => this.props.employeeUpdate({prop: 'phone', value: text})}
          />
        </CardSection>

        <CardSection>
          <Text style={styles.pickerLabelStyle}>Shift</Text>
          <Picker
            style={{flex: 1}}
            selectedValue={this.props.shift}
            onValueChange={day => this.props.employeeUpdate({prop: 'shift', value: day})}
          >
            <Picker.Item label="Monday" value="Monday"/>
            <Picker.Item label="Tuesday" value="Tuesday"/>
            <Picker.Item label="Wednesday" value="Wednesday"/>
            <Picker.Item label="Thursday" value="Thursday"/>
            <Picker.Item label="Friday" value="Friday"/>
            <Picker.Item label="Saturday" value="Saturday"/>
            <Picker.Item label="Sunday" value="Sunday"/>
          </Picker>
        </CardSection>
      </View>
    )
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    color: '#000'
  }
}

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm

  return {name, phone, shift}
}

export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm)
