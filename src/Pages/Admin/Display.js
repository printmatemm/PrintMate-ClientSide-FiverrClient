import React from 'react';
import { notification } from 'antd';

const Display = ({ quotes }) => {
  const MarkContacted = async (id) => {
    try {
      const response = await fetch('http://localhost:4002/MarkContacted', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();

      if (data.success) {
        notification.success({
          message: 'Success',
          description: 'Successfully Marked as Contacted',
          placement: 'topRight',
        });
      } else {
        notification.error({
          message: 'Error',
          description: 'Something Went Wrong',
          placement: 'topRight',
        });
      }
    } catch (error) {
      console.error('Error marking as contacted:', error);
    }
  };

  const DeleteQuote = async (id) => {
    try {
      const response = await fetch('http://localhost:4002/DeleteQuote', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();

      if (data.success) {
        notification.success({
          message: 'Success',
          description: 'Successfully Deleted',
          placement: 'topRight',
        });
      } else {
        notification.error({
          message: 'Error',
          description: 'Something Went Wrong',
          placement: 'topRight',
        });
      }
    } catch (error) {
      console.error('Error deleting quote:', error);
    }
  };

  return (
    <div className='container'>
      {quotes.map((quote) => (
                <>
                <div className='QuoteContainer'>
                    <div className='Main-Details'>
                        <h5><strong>Product Name:</strong> {quote?.Product}</h5>
                        <h5><strong>Quote ID:</strong> {quote?._id}</h5>
                        <h5><strong>Customer Name:</strong> {quote?.Name}</h5>
                        <h5><strong>Customer Email:</strong> {quote?.Email}</h5>
                        <h5><strong>Customer Phone:</strong> {quote?.Phone}</h5>
                        <h5><strong>Customer Address:</strong> {quote?.Address}</h5>
                        <h5><strong>Delivery:</strong> {quote?.Delivery} Delivery Days</h5>
                        <h5><strong>Quantity:</strong> {quote?.Quantity} Items</h5>
                    </div>
                    <div className='Quote-Details'>
                        <div>
                        {quote.PaperType &&
                            <h5><strong>Paper Type:</strong> {quote?.PaperType}</h5>
                        }
                        {quote.PaperWeight &&
                            <h5><strong>Paper Weight:</strong> {quote?.PaperWeight}</h5>
                        }
                        {quote.Sides &&
                            <h5><strong>Sides:</strong> {quote?.Sides}</h5>
                        }
                        {quote.Lamination &&
                            <h5><strong>Lamination:</strong> {quote?.Lamination}</h5>
                        }
                        {quote.UVSpot &&
                            <h5><strong>UV Spot:</strong> {quote?.UVSpot}</h5>
                        }
                        {quote.Corner &&
                            <h5><strong>Corner:</strong> {quote?.Corner}</h5>
                        }
                        {quote.Fold &&
                            <h5><strong>Fold:</strong> {quote?.Fold}</h5>
                        }
                        {quote.Sizes &&
                            <h5><strong>Sizes:</strong> {quote?.Sizes}</h5>
                        }
                        {quote.Envelope &&
                            <h5><strong>Envelope:</strong> {quote?.Envelope}</h5>
                        }
                        {quote.DrillOption &&
                            <h5><strong>Drill Option:</strong> {quote?.DrillOption}</h5>
                        }
                        {quote.RollerBannerType &&
                            <h5><strong>Roller Banner Type:</strong> {quote?.RollerBannerType}</h5>
                        }
                        {quote.FlagType &&
                            <h5><strong>Flag Type:</strong> {quote?.FlagType}</h5>
                        }
                        {quote.AmountOfPrintedPages &&
                            <h5><strong>Amount Of Printed Pages:</strong> {quote?.AmountOfPrintedPages}</h5>
                        }
                        {quote.CoverOption &&
                            <h5><strong>Cover Option:</strong> {quote?.CoverOption}</h5>
                        }
                        {quote.FolderType &&
                            <h5><strong>Folder Type:</strong> {quote?.FolderType}</h5>
                        }
                        {quote.Finishing &&
                            <h5><strong>Finishing:</strong> {quote?.Finishing}</h5>
                        }
                        {quote.MenuType &&
                            <h5><strong>Menu Type:</strong> {quote?.MenuType}</h5>
                        }
                        </div>
                        <div className='ButtonContainer3'>
                            <button onClick={()=>MarkContacted(quote._id)}>Mark as Contacted</button>
                            <button onClick={()=>DeleteQuote(quote._id)}>Delete</button>
                        </div>
                    </div>
                </div>
                </>
        ))}
    </div>
    );
}

export default Display;
