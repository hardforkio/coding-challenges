// https://www.codewars.com/kata/54da539698b8a2ad76000228
import * as R from 'ramda'

export const isValidWalk = (walk: string[]): boolean => {
    // insert brilliant code here
    let vertical = 0
    let horizontal = 0
    if(R.length(walk) !== 10) {
        return false
    }
    const isHome = R.reduce((isHome, direction) => {
        if(direction === "n"){
            vertical += 1
        }
        if(direction === "s"){
            vertical -= 1
        }
        if(direction === "e"){
            horizontal += 1
        }
        if(direction === "w"){
            horizontal -= 1
        }
        if (vertical === 0 && horizontal === 0) {
            return true
        }
        return false
    }, false)(walk)
    if(isHome){
        return true
    }
    return false
  }
