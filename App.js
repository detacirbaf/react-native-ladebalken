// React Native Ladebalken Test


import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import AnimatedBar from "react-native-animated-bar"; // 0.2.0 

export default class example extends Component {
  state = {
    progress: 0,
  };

  componentDidMount() {
    const interval = setInterval(() => {
      if (this.state.progress > 0.9) return clearInterval(interval);

      this.setState(state => {
        return {
          progress: state.progress + 0.1,
        };
      });
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <AnimatedBar progress={this.state.progress} />
        </View>

        

        <View>
          <AnimatedBar
            progress={this.state.progress}
            height={20}
            borderColor="#DDD"
            barColor="tomato"
            borderRadius={5}
            borderWidth={0}
            animate={false}
          />
        </View>
        <View>
          <AnimatedBar
            progress={this.state.progress}
            height={null}
            borderColor="#DDD"
            barColor="tomato"
            borderRadius={5}
            borderWidth={5}
            duration={500}
          >
            <View style={[styles.row, styles.center]}>
              <Text style={[styles.barText, { fontSize: 30 }]}>
                {Math.round(this.state.progress * 100)}%
              </Text>
            </View>
          </AnimatedBar>
        </View>

        <View>
          <AnimatedBar
            progress={this.state.progress}
            height={20}
            borderColor="#DDD"
            barColor="tomato"
            borderRadius={5}
            borderWidth={5}
            duration={500}
          />
        </View>
        <View style={styles.row}>
          <AnimatedBar
            progress={this.state.progress}
            height={40}
            borderColor="#DDD"
            barColor="tomato"
            borderRadius={5}
            borderWidth={5}
            duration={500}
            row
          >
            <View style={[styles.row, styles.center, { flex: 1 }]}>
              <Text style={styles.barText}>
                {Math.round(this.state.progress * 100)}%
              </Text>
            </View>
          </AnimatedBar>
        </View>
        <View>
          <AnimatedBar
            progress={this.state.progress}
            height={50}
            borderColor="#DDD"
            fillColor="tomato"
            barColor="red"
            borderRadius={5}
          />
        </View>
        

        <View style={styles.row}>
          <AnimatedBar
            progress={this.state.progress}
            height={null}
            borderColor="#DDD"
            barColor="tomato"
            borderRadius={5}
            borderWidth={5}
            duration={500}
            row
          >
            <View style={[styles.row, styles.center]}>
              <Text style={[styles.barText, { fontSize: 30 }]}>
                {Math.round(this.state.progress * 100)}%
              </Text>
            </View>
          </AnimatedBar>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 30,
    justifyContent: "space-around",
 
  },
  row: {
    flexDirection: "row",
  },
  center: {
    
    justifyContent: "center",
    alignItems: "center",
  },
  barText: {
    backgroundColor: "transparent",
    color: "#FFF",
  },
});
