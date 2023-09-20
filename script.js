document.addEventListener("DOMContentLoaded", function () {
   const roomRate = {
       Delux: 2500,
       Suite: 4000,
   };

   const amenitiesCost = {
       AC: 1000,
       Locker: 300,
   };

   const customerNameInput = document.getElementById("customer-name");
   const checkinDateInput = document.getElementById("checkin-date");
   const totalDaysInput = document.getElementById("total-days");
   const totalPersonsInput = document.getElementById("total-persons");
   const roomTypeSelect = document.getElementById("room-type");
   const advanceAmountInput = document.getElementById("advance-amount");
   const amenitiesSelect = document.getElementById("amenities");
   const calculateRoomCostButton = document.getElementById("calculate-room-cost");
   const calculateAmenitiesCostButton = document.getElementById("calculate-amenities-cost");
   const calculateTotalCostButton = document.getElementById("calculate-total-cost");
   const totalRoomCostSpan = document.getElementById("total-room-cost");
   const totalAmenitiesCostSpan = document.getElementById("total-amenities-cost");
   const totalCostSpan = document.getElementById("total-cost");
   const balanceSpan = document.getElementById("balance");

   function calculateRoomCost() {
       const selectedRoomType = roomTypeSelect.value;
       const totalDays = parseInt(totalDaysInput.value);
       const roomCost = roomRate[selectedRoomType] * totalDays;
       totalRoomCostSpan.textContent = roomCost;
   }

   function calculateAmenitiesCost() {
       const selectedAmenities = Array.from(amenitiesSelect.selectedOptions, option => option.value);
       const totalDays = parseInt(totalDaysInput.value);
       const amenitiesCostPerDay = selectedAmenities.reduce((total, amenity) => total + amenitiesCost[amenity], 0);
       const totalAmenitiesCost = amenitiesCostPerDay * totalDays;
       totalAmenitiesCostSpan.textContent = totalAmenitiesCost;
   }

   function calculateTotalCost() {
       const roomCost = parseInt(totalRoomCostSpan.textContent);
       const amenitiesCost = parseInt(totalAmenitiesCostSpan.textContent);
       const advanceAmount = parseInt(advanceAmountInput.value);
       const totalCost = roomCost + amenitiesCost;
       const balance = totalCost - advanceAmount;
       totalCostSpan.textContent = totalCost;
       balanceSpan.textContent = balance;
   }

   calculateRoomCostButton.addEventListener("click", calculateRoomCost);
   calculateAmenitiesCostButton.addEventListener("click", calculateAmenitiesCost);
   calculateTotalCostButton.addEventListener("click", calculateTotalCost);
});
