// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract MyContract {
  uint number;
  
  function setNumber(uint _number) public {
    require(_number >= 0);
    number = _number;
  }

  function getNumber() public view returns (uint) {
    return number;
  }
}
