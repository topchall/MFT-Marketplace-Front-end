import { useState } from "react";
import toast from "react-hot-toast";
import { Button, Modal } from "@material-ui/core";
import "./PlaceBid.scss";

export default function PlaceBid({ balance, nftFee, onClose, onSubmit, rate }: any) {
  const [open, setOpen] = useState<any>(true);
  const [currencyValue, setCurrencyValue] = useState<any>("ETH");
  const [bidPrice, setBidPrice] = useState<any>(0);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const placeBid: any = () => {
    if (parseFloat(bidPrice) > balance) {
      toast.error("Your bid price is out of your balance");
      return;
    }
    handleClose();
    onSubmit(bidPrice);
  };
  const onChangePrice = (e: any) => {
    setBidPrice(e.target.value);
  };

  return (
    <Modal
      className="item-place-bid"
      open={true}
      onClose={(event, reason) => {
        if (reason === "backdropClick") {
          return false;
        }
        if (reason === "escapeKeyDown") {
          return false;
        }
      }}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className="modal-content">
        <div className="place_bid_title">Place a Bid</div>
        <div className="placeContainer">
          <input
            min="0"
            name="price"
            type="number"
            onChange={onChangePrice}
            placeholder="Your Bid Price:"
          />
          <div>VLX = {(rate * parseFloat(bidPrice)).toFixed(3)}USD</div>
          {parseFloat(bidPrice) < 0.111 && (
            <div className="warning">
              The price should be higer than 0.111VLX
            </div>
          )}
        </div>
        <br />
        <div className="btns">
          <Button
            className=""
            onClick={handleClose}
            variant="contained"
            color="primary"
          >
            Close
          </Button>
          <Button
            className=""
            onClick={placeBid}
            variant="contained"
            color="primary"
          >
            Place a Bid
          </Button>
        </div>
      </div>
    </Modal>
  );
}
